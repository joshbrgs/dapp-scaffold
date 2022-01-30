const timeElapsed = Date.now();
const today = new Date(timeElapsed);

const objectMapper = (email) => { 
    let dto = {
        identifiers: [
        {
            channels: {
                // sms: { status: 'nonSubscribed', statusDate: today.toISOString() }, 
                email: {status: 'subscribed',
                statusDate: today.toISOString(),
                }
            },
            id: email,
            type: 'email'
        }
        ],
        tags: ['source: landing-page']
    }
    return dto
};

module.exports=objectMapper;