export function cacheRequestHelper<T = any>(): (
  api: (...e: any) => Promise<T>,
) => (...e: any) => Promise<T> {

  const fnMapper = new Map()
  const observer = {
    subscribe: (key: any, fn) => {
      const e = fnMapper.get(key)
      if (e) {
        e.push(fn)
      } else {
        fnMapper.set(key, [fn])
      }
    },
    publish: (key: any, res) => {
      const e = fnMapper.get(key) || []
      e.map((fn) => {
        fn.call(null, res)
      })
    },
  }

  const mapper = new Map<
    any,
    {
      result?: any
      fetched: boolean
      key: any
      expire?: number
    }
  >()

  function getInfo(args) {
    const keys = Array.from(mapper.keys())
    const key = keys.find((item) => {
      if (isEqual(item, args)) {
        return true
      }
    })
    return mapper.get(key)
  }

  return (api) => {
    return (...args) => {
      const info = getInfo(args)
      if (info?.result) {
        return Promise.resolve(info.result)
      }
      if (!info) {
        mapper.set(args, {
          fetched: true,
          key: args,
        })
        return api.apply(null, args).then((res) => {
          const v = mapper.get(args)
          if (v) {
            v.result = res
          } else {
            mapper.set(args, {
              fetched: true,
              result: res,
              key: args,
            })
          }
          observer.publish(args, res)
          return res
        })
      } else {
        return new Promise((resolve, reject) => {
          observer.subscribe(info.key, (res) => {
            resolve(res)
          })
        })
      }
    }
  }
}



