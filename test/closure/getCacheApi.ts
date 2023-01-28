type IParams = Record<string, any>;

interface IGetOption {
  method: "Get";
  api: string;
  params?: IParams;
}
/**
 * 使用method、api、params 生成唯一key,作为缓存的键
 * @param options
 * @returns
 */
function genGetApiCacheKey(options: IGetOption) {
  const paramsPath = formGetQueryParams(options.params || {});

  let _paramsPath = paramsPath ? `?${paramsPath}` : "";

  return `${options.method || "Get"} ${options.api}${_paramsPath}`;
}
/**
 *  格式get请求的查询数据
 * @param params
 * @returns
 */
function formGetQueryParams(params: IParams) {
  const queryParams = Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join("&");
  return queryParams;
}
/**
 * 扩展Date方法 TODO 有点问题
 */
interface Date {
  add: (n: number, type: "s" | "m" | "h") => any;
}
// @ts-ignore
Date.prototype.add = function (n, type) {
  let timestamp = this.getTime();

  switch (type) {
    case "s":
      timestamp = timestamp + n * 1000;
      break;

    case "m":
      timestamp = timestamp + n * 60 * 1000;
      break;

    case "h":
      timestamp = timestamp + n * 60 * 60 * 1000;
      break;

    default:
      throw new Error("need type");
  }
  return timestamp;
};
/**
 * 检测时间是否有效
 * @param expire
 * @param now
 * @returns
 */
function isValid(
  lastTimeStamp,
  diff = 3.5,
  type = "s",
  now = new Date().getTime()
) {
  const valid =
    // @ts-ignore
    lastTimeStamp && new Date(lastTimeStamp).add(diff, type).valueOf() > now;

  console.log("valid", valid);
  return valid;
}
/**
 * 模拟请求数据
 * @param params
 * @returns
 */
function mockApiBack(params: any) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, result: params });
    }, 500);
  });
}
/**
 * 使用闭包进行数据缓存，刷新后缓存会销毁重建
 * @returns
 */
export const getCacheFunc = () => {
  const CACHEOBJ = {};

  return (options: IGetOption) => {
    console.log("options", options);

    const cacheKey = genGetApiCacheKey(options);

    let result = CACHEOBJ[cacheKey];
    console.log("CACHEOBJ", CACHEOBJ);
    if (!result || !isValid(result.timestamp)) {
      console.log("缓存失效，接口获取=>>>>>>>>>>>>>>>>>>>>>", cacheKey);
      return mockApiBack(options).then((res: any) => {
        CACHEOBJ[cacheKey] = {
          ...res,
          timestamp: new Date().getTime(),
        };
        result = CACHEOBJ[cacheKey];
        return result;
      });
    } else {
      console.log("读缓存数据");
      return new Promise((resolve) => resolve(result));
    }
  };
};

export const getApiWithCache = getCacheFunc();

// 测试数据
getApiWithCache({ method: "Get", api: "/hello" });
getApiWithCache({ method: "Get", api: "/hello/world" });

let h = setInterval(async () => {
  const d = await getApiWithCache({
    method: "Get",
    api: "/hello",
    params: { name: 1, age: 2 },
  });
  console.log("d", d);
}, 1000 * 1);

setTimeout(() => {
  clearInterval(h);
}, 1000 * 4);
