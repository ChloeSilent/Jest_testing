class Ajax {
    static echo(data) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (data) {
                    resolve(data)
                } else {
                    new Error('Error!!!!')
                }
            }, 1000)
        })
    }
}

module.exports = Ajax;