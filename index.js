const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/", { useNewurlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB connected with server");
    }).catch((err) => {
        console.log(err)
    })

const personal = new mongoose.Schema({
    name: String,
    workout: Boolean,
    height: Number

})

const Personal = mongoose.model("Personal", personal)

const adder = async () => {
    // const ps = new Personal({
    //     name: "Nurul",
    //     workout: true,
    //     height: 6
    // })
    const ps = await Personal.create({
        name: "NURUL",
        workout: true,
        height: 5.6
    })
    console.log(ps)
}

adder()

