const feed =[
      {
        creator: {
          name: "HackFlex",
          avatarURL:
            "https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg"
        },
        assigner: {
          name: "James Horner",
          about: "Менеджер",
          avatarURL: "https://avatarfiles.alphacoders.com/952/95227.jpg"
        },
        categories: ["Телефонный звонок", "Новый клиент"],
        description: "Узнать у клиента когда он сможет приехать к нам в офис.<br>Великая страна эта Россия. Кизару Новые синглы",
        createDate: new Date().toLocaleString(),
        deadline: new Date().toLocaleString(),
        id: 2,
        status: "Критическая",
        stateManager: "Выполнена",
        title: "Пригласить клиента в офис",
        type: "task"
      }
]

export const mutations = {
    
}

export const actions = {
    async fetchTasks(){
        try {
            return await new Promise(resolve => {
                setTimeout(() => {
                    resolve(feed)
                }, 1000);
            })
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}