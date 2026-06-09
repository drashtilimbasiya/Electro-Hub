// ===========================
// FULL server.js
// ===========================

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// ================= DATABASE =================

mongoose.connect("mongodb://127.0.0.1:27017/electronic_store")
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});

// ================= USER SCHEMA =================

const UserSchema = new mongoose.Schema({

    name: String,
    email: String,
    password: String

});

const UserModel = mongoose.model(
    "users",
    UserSchema
);

// ================= PRODUCT SCHEMA =================

const ProductSchema = new mongoose.Schema({

    pname: String,

    company: String,

    category: String,

    price: Number,

    discount: Number,

    image: String,

    description: String,

    offers: [String],

    details: [String]

});

const ProductModel = mongoose.model(
    "products",
    ProductSchema
);

// ================= SIGNUP =================

app.post("/signup", async (req, res) => {

    try {

        const user = new UserModel({

            name: req.body.name,
            email: req.body.email,
            password: req.body.password

        });

        await user.save();

        res.json({
            message: "Signup Successful"
        });

    } catch (error) {

        console.log(error);

        res.json({
            message: "Signup Failed"
        });
    }
});

// ================= LOGIN =================

app.post("/login", async (req, res) => {

    try {

        const user = await UserModel.findOne({

            email: req.body.email,
            password: req.body.password

        });

        if(user){

            res.json({
                message: "Login Successful"
            });

        }else{

            res.json({
                message: "Invalid Email Or Password"
            });
        }

    } catch (error) {

        console.log(error);

        res.json({
            message: "Login Failed"
        });
    }
});

// ================= ADD PRODUCT =================

app.post("/addproduct", async (req, res) => {

    try {

        const product = new ProductModel({

            pname: req.body.pname,

            company: req.body.company,

            category: req.body.category
            .toLowerCase()
            .trim(),

            price: req.body.price,

            discount: req.body.discount,

            image: req.body.image,

            description: req.body.description,

            offers: req.body.offers,

            details: req.body.details

        });

        await product.save();

        res.json({
            message: "Product Added"
        });

    } catch (error) {

        console.log(error);

        res.json({
            message: "Add Failed"
        });
    }
});

// ================= GET ALL PRODUCTS =================

app.get("/products", async (req, res) => {

    try {

        const products =
        await ProductModel.find();

        res.json(products);

    } catch (error) {

        console.log(error);

        res.json([]);
    }
});

// ================= CATEGORY PRODUCTS =================

app.get("/categoryproducts/:category", async (req, res) => {

    try {

        let category =
        req.params.category
        .toLowerCase()
        .trim();

        // REMOVE s
        // laptops => laptop

        if(category.endsWith("s")){

            category =
            category.slice(0, -1);
        }

        const allProducts =
        await ProductModel.find();

        const filteredProducts =
        allProducts.filter((item) => {

            if(!item.category){

                return false;
            }

            let dbCategory =
            item.category
            .toLowerCase()
            .trim();

            if(dbCategory.endsWith("s")){

                dbCategory =
                dbCategory.slice(0, -1);
            }

            return dbCategory === category;
        });

        res.json(filteredProducts);

    } catch (error) {

        console.log(error);

        res.json([]);
    }
});

// ================= GET SINGLE PRODUCT =================

app.get("/product/:id", async (req, res) => {

    try {

        const product =
        await ProductModel.findById(
            req.params.id
        );

        res.json(product);

    } catch (error) {

        console.log(error);

        res.json({});
    }
});

// ================= UPDATE PRODUCT =================

app.put("/updateproduct/:id", async (req, res) => {

    try {

        await ProductModel.findByIdAndUpdate(

            req.params.id,

            {

                pname: req.body.pname,

                company: req.body.company,

                category: req.body.category
                .toLowerCase()
                .trim(),

                price: req.body.price,

                discount: req.body.discount,

                image: req.body.image,

                description: req.body.description,

                offers: req.body.offers,

                details: req.body.details
            }

        );

        res.json({
            message: "Updated"
        });

    } catch (error) {

        console.log(error);

        res.json({
            message: "Update Failed"
        });
    }
});

// ================= DELETE PRODUCT =================

app.delete("/deleteproduct/:id", async (req, res) => {

    try {

        await ProductModel.findByIdAndDelete(
            req.params.id
        );

        res.json({
            message: "Deleted"
        });

    } catch (error) {

        console.log(error);

        res.json({
            message: "Delete Failed"
        });
    }
});

// ================= SERVER =================

app.listen(5000, () => {

    console.log(
        "Server Running On Port 5000"
    );

});