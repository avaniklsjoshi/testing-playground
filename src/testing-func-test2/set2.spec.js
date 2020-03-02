// // testing func arguments
// const WINNER = {
//     getWinner(player1, player2){
//         return  Math.random() < 1/3 ? player1 : player2;
//       },
//   };
 
// test('mocking func in right way', () => {
//     console.log(WINNER.getWinner.toString());
//     jest.spyOn(WINNER, 'getWinner');
//     WINNER.getWinner.mockImplementation((p1, p2) => p1); 
//     console.log(WINNER.getWinner.toString());
//     const winner = WINNER.getWinner('Hanky', 'Panky'); // less args
//     expect(winner).toBe('Hanky');

//     expect(WINNER.getWinner).toHaveBeenCalledTimes(1);
//     expect(WINNER.getWinner).toHaveBeenCalledWith('Hanky', 'Panky');
//     expect(WINNER.getWinner).toHaveBeenNthCalledWith(1, 'Hanky', 'Panky');

//     WINNER.getWinner.mockRestore(); // clean up
//     console.log(WINNER.getWinner.toString());
// });


test('test winner', () => {

    function getWinner(player1, player2){
        return  Math.random() < 1/3 ? player1 : player2;
    }

    const originalGetWinner = getWinner;
    getWinner = jest.fn((p1, p2) => p1); 

    // console.log(getWinner);
    // console.log(getWinner.mock);

    const winner = getWinner('Hanky', 'Panky'); // less args
    // console.log(getWinner.mock);

    expect(winner).toBe('Hanky');
    expect(getWinner.mock.calls).toEqual([["Hanky", "Panky"]]);

    expect(getWinner).toHaveBeenCalledTimes(1);
    expect(getWinner).toHaveBeenCalledWith('Hanky', 'Panky');
    expect(getWinner).toHaveBeenNthCalledWith(1, 'Hanky', 'Panky');

    getWinner = originalGetWinner; // clean up
});
