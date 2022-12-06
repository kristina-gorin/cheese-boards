const {sequelize} = require('./db');
const {User,Board,Cheese} = require('./index')

describe('User/Cheese/Board models',()=>{
    beforeAll(async () => {
        //why do i need this, ask someone
        await sequelize.sync({ force: true });
    })
    test('creates User', async () =>{
        const user1 = await User.create({name:'BoJack',email:'bojack@gmail.com'});
        expect(user1.name).toBe('BoJack');
        expect(user1.email).toBe('bojack@gmail.com')
    })
    test('creates Cheese', async()=>{
        const cheese1 = await Cheese.create({title:'brie', description:'white,buttery,creamy'});
        expect(cheese1.title).toBe('brie');
        expect(cheese1.description).toBe('white,buttery,creamy')
    })
    test('creates Board', async()=>{
        const board1 = await Board.create({type:'type',description:'description',rating:5});
        expect(board1.type).toBe('type');
        expect(board1.description).toBe('description');
        expect(board1.rating).toBe(5)
    })

})