import profileReducer, {addPostActionCreater, deletePost} from './profile-reducer';

let state = {
    postsData: [
        { id: 1, message: 'Hi, how are you?', likesCount: 15 },
        { id: 2, message: 'It\'s my first post', likesCount: 132 },
        { id: 3, message: 'what\'s up fellows', likesCount: 132 },
        { id: 4, message: 'bla bla', likesCount: 132 },
    ]
};

test('new post should be added', () => {
    //1.start data
    let action = addPostActionCreater('it-kamasutra.com');
    
    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.postsData.length ).toBe(5);
});

test('message of new post should be correct', () => {
    //1.start data
    let action = addPostActionCreater('it-kamasutra.com');

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.postsData[4].message ).toBe('it-kamasutra.com');
});

test('after deleting length of messages should be decrement', () => {
    //1.start data
    let action = deletePost(1);

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.postsData.length ).toBe(3);
});

test('after deleting length shouldn\'t be decrement if id is incorrect', () => {
    //1.start data
    let action = deletePost(1000);

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.postsData.length ).toBe(4);
});