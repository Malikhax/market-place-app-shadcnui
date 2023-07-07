export const product ={
    name:"product",
    type:'document',
    title:"Product",
    fields:[
        {
            name:"title",
            title:"Product Title",
            type:"string"
        },
        {
            name:"description",
            title:"Product Description",
            type:"string"
        },
        {
            name:"price",
            title:"Product Price",
            type:"number"
        },
        {
            name:"category",
            title:"Product category",
            type:"reference",
            to:[{
                type:"category"
            }]
        },
        {
            name:"image",
            title:"Product image",
            type:"image"
        } 
    ]
}