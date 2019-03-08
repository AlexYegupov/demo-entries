const getEntriesAPI = async (mode) => (
  new Promise(
    (resolve, reject) =>
      setTimeout(
        () => {
          if (mode === 'app') {
            resolve(['Entry1', 'Entry2', 'Entry3', 'Entry4', 'Entry5'])
          }

          if (mode === 'admin') {
            resolve(['AdminEntry1', 'AdminEntry2', 'AdminEntry3'])
          }

          reject('no entries')
        },
        1000)
  )
)


export { getEntriesAPI }
