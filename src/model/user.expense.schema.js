import { mongoose } from '../config';


const addressSchema = new mongoose.Schema({
    line1: String,
    line2: String,
    city: String,
    state: String,
    pincode: Number,
});

const expenseSchema = new mongoose.Schema({
    type: String,
    details: String,
    amount: Number,
    date: {
        type: Date,
        default: Date.now,
        // required: [true, 'Date field is required'],
    },
});

const userExpenseSchema = new mongoose.Schema({
    userId: Number,
    name: String,
    phone: Number,
    address: {
        type: addressSchema,
        // required: [true, 'address field is required'],
    },
    expense: [expenseSchema],

});

export default mongoose.model('UserExpenseData', userExpenseSchema);
