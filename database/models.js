module.exports = { 
	user:{ 
		name:{type:String,required:true},
		password:{type:String,required:true},
                sex:{type:String,required:false}
	},
        question:{
                title:{type:String,required:true},
                content:{type:String,required:true},
             	time:{type:String,required:true},
		name:{type:String,required:true}
        }
};
