export function useMiddleware(store: any, storeName: string) {
    store.$onAction((context: any) => {

        try {
            if (context.args.length > 0) {
                console.log(`Действие в ${storeName} :`, context.name, `c агументами :`, context.args)
            } else {
                console.log(`Действие в ${storeName} :`, context.name)
            }
            console.log(context)
        } catch (error) {
            console.log(`Ошибка в ${storeName}`)
        }
    })
}

