const PersonSchema = {
    person_id: {
        type: 'uuid',
        primary: true,
    },
    name: {
        type: 'string',
        index: true,
    },
    age: 'number',
    createdAt: {
        type: 'datetime',
        default: () => new Date,
    }
}

module.exports = PersonSchema