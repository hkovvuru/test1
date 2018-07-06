import { mongoose } from '../config';

const businessUnitSchema = new mongoose.Schema({
    businessUnitId: {
        type: String,
        required: [true, 'BU id is required'],
    },
    businessUnitName: {
        type: String,
        required: [true, 'BU name is required'],
    },
});

const employeeSchema = new mongoose.Schema({
    employeeId: {
        type: Number,
        required: [true, 'Employee id is required'],
    },
    firstName: {
        type: String,
        required: [true, 'First Name feild is required'],
    },
    middleName: {
        type: String,
    },
    lastName: {
        type: String,
        required: [true, 'Last Name feild is required'],
    },
    mobileNo: {
        type: Number,
        required: [true, 'Last Name feild is required'],
    },
    salary: {
        type: Number,
        required: [true, 'Salary is required'],
    },
    experience: {
        type: Number,
        required: [true, 'Experience is required'],
    },
    yearEndRating: {
        type: Number,
    },
    hikePercentage: {
        type: Number,
    },
    businessUnit: {
        type: businessUnitSchema,
        required: [true, 'BU is required'],
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

export default mongoose.model('Employee', employeeSchema);
