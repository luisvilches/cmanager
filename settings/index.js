module.exports = {
    SERVER:{
        port:1989,
        media_url: "public",
        cors:{
            allowed_host:['*']
        },
        security:{
            jwt_secret_key:"ufvghf_crexythj__bhgctwazes_xdcfvb8-65632a6t6_6hg438:76897098y_87g76f9"
        }
    },
    DATABASE:{
        development:{
            name:"cardumen",
            user:"cardumen",
            password:"cardumen123",
            port:"45150",
            host:"ds245150.mlab.com",
            provider:"mlab"
        },
        producction:{
            name:"",
            user:"",
            password:"",
            port:"",
            host:"",
            provider:""
        }
    }
};