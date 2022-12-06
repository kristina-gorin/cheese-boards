const {sequelize} = require('./db');
const {User,Board,Cheese} = require('./index')

describe('User/Cheese/Board models',()=>{
    beforeAll(async () => {
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
    test('can update instance (board)',async()=>{
        const board1 = await Board.create({type:'type',description:'description',rating:5});
        const updatedBoard1 = await board1.update({rating:4});
        expect(updatedBoard1.rating).toBe(4) 
    })
    test('can delete instance', async()=>{
        const board1 = await Board.create({type:'type',description:'description',rating:5});
        const deletedBoard = await board1.destroy();
        expect(deletedBoard.type).toBe('type');
    })
    //associations user<-->boards
    test('user has many boards', async()=>{
        const user1 = await User.create({name:'BoJack',email:'bojack@gmail.com'});
        const board1 = await Board.create({type:'french',description:'delish',rating:5});
        const board2 = await Board.create({type:'vegan', description:'odd', rating:3});
        await user1.addBoard(board1);
        await user1.addBoard(board2);
        //now test
        const user1boards = await user1.getBoards();
        expect(user1boards.length).toBe(2);
    })
    //cheese<--->board (many-to-many)
    test('board has many cheeses, cheese has many boards', async ()=>{
        const cheese1 = await Cheese.create({title:'brie', description:'white,buttery,creamy'});
        const cheese2 = await Cheese.create({title:'vegan cheddar', description:'yellow,firm'});
        const board1 = await Board.create({type:'french',description:'delish',rating:5});
        const board2 = await Board.create({type:'vegan', description:'odd', rating:3});
        await cheese1.addBoards([board1,board2]);
        const cheese1boards = await cheese1.getBoards();
        expect(cheese1boards.length).toBe(2);
    })
    //eager loading
    test('')

})
