import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const shippingAddressSchema = mongoose.Schema({
    city: {
        type: String,
        require: true},
    district: {
        type: String,
        require: true
    },
    neighborhood: {
        type: String,
        require: true
    },
    street: {
        type: String,
        require: true
    },
    lane: {
        type: Number,
        require: true
    },
    telephone: {
        type: String,
        require: true
    },
    isDefault: {
        type: Boolean,
        require: false,
        default: false
    },
})

const userSchema = mongoose.Schema({
    accountName : {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    dateOfBirth: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    telephone : {
        type: String,
        require: true,
        unique: true
    },
    gender: {
        type: String,
        require: true
    },
    occupation: {
        type: String,
        require: true
    },
    nationality: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    district: {
        type: String,
        require: true
    },
    neighborhood: {
        type: String,
        require: true
    },
    street: {
        type: String,
        require: true
    },
    lane: {
        type: Number,
        require: true
    },
    shippingAddress: [shippingAddressSchema],
    isAdmin: {
        type: Boolean,
        require: true,
        default: false
    }
},{
    timestamps: true
})
//login
userSchema.methods.matchPassword = async function (enterPassword){
    return await bcrypt.compare(enterPassword,this.password)
}
//register
userSchema.pre("save", async function(next){
    if(!this.isModified("password")) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
})
const User = mongoose.model("User", userSchema);
export default User;