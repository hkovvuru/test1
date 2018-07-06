import { mongoose } from '../config';

// Defining user schema.
const userSchema = new mongoose.Schema({
    cuid: {
        type: 'String',
        required: [true, 'Unique id is required'],
    },
    firstName: {
        type: String,
        required: [true, 'First Name feild is required'],
    },
    lastName: {
        type: String,
        required: [true, 'Last Name feild is required'],
    },
    emailid: {
        type: 'String',
        required: [true, 'Email id is required'],
    },
    active: {
        type: Boolean,
        default: true,
    },
    dateAdded: {
        type: 'Date',
        default: Date.now,
        required: [true, 'User added date is required'],
    },
});

export default mongoose.model('User', userSchema);
