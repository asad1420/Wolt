const { text } = require('stream/consumers');
const {estimatedPrice, Date_Day, Dday} = require('./estimatedPrice');



const EstimatedPrice = new estimatedPrice();

test('should return Day ', () =>{

    const text = Date_Day(1);
    expect(text).toBe('monday');
    

});
 

 test('should return True, if the day is Friday between rush hour 15-19', () =>{

    const text = EstimatedPrice.rushHours('friday',15,20);
    expect(text).toBe(true);

    const text1 = EstimatedPrice.rushHours('friday',15,0);
    expect(text1).toBe(true);

    const text2 = EstimatedPrice.rushHours('friday',19,0);
    expect(text2).toBe(true);

    const text3 = EstimatedPrice.rushHours('friday',19,5);
    expect(text3).toBe(false);

});



test('should return delivery distance ', () =>{
   
    const test =  EstimatedPrice.deliveryDistance(800,0)
    expect(test).toBe(2);
    
    const test1 =  EstimatedPrice.deliveryDistance(1500,0)
    expect(test1).toBe(3);

    const test2 =  EstimatedPrice.deliveryDistance(1501,0)
    expect(test2).toBe(4);
});


test('should return appropriate additional surcharges for delivery price', () =>{

    const text = EstimatedPrice.cartValueScale(8.9,0)
    expect(text).toBe(1.10);
    
    const text1 = EstimatedPrice.cartValueScale(100,0)
    expect(text1).toBe(0);
});

test('Cart item extra charges', () =>{

    const text = EstimatedPrice.cartItems(4,1)
    expect(text).toBe(1);
    
    const text1 = EstimatedPrice.cartItems(5,1)
    expect(text1).toBe(1.5);
    
   
});


test('Should return day', () =>{

    const text = Dday('2022-01-25T11:43')
    expect(text).toBe('tuesday');
   
    
   
});



