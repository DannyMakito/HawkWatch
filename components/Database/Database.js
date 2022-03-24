export const Items = [
    {
        id:1,
        category: 'product',
        productName: 'Hawk camera',
        productPrice: 'R1700',
        description: 'Up to 24hours battery life | 4K resolution | Water ressistent | Night vission mode',
        isOff: true,
        isAvailable: true ,
        offPercentage: 10,
        productImage: require('../Database/Products/Camera1.jpg'), 
        productImageList:[
            require('../Database/Products/Camera1.jpg'), 
            require('../Database/Products/Camera2.jpg'), 
            require('../Database/Products/Camera3.jpg'), 
        ]
    },
    {
        id:2,
        category: 'product',
        productName: 'Hawk DoorLock',
        productPrice: 'R2000',
        description: 'Unhackable pin |2 step Lock | Water ressistent | inbuild charge',
        isOff: false,
        isAvailable: true ,
        productImage: require('../Database/Products/DoorLock3.jpg'),
        productImageList:[
            require('../Database/Products/DoorLock2.jpg'),
            require('../Database/Products/DoorLock3.jpg'),
            require('../Database/Products/DoorCam.jpg'),
        ]
    },
    {
        id:3,
        category: 'gadget',
        productName: 'Hawk Alarm system',
        productPrice: 'R3000',
        description: '24h response |Supports up to 4 camera | Emergency number dail | inbuild self chargecharge',
        isOff: false,
        isAvailable: true ,
        productImage: require('../Database/Products/HouseM1.jpg'), 
        productImageList:[
            require('../Database/Products/HouseM2.jpg'),
            require('../Database/Products/HouseM3.jpg'),
            require('../Database/Products/HouseM4.jpg'),
        ]
    },
    {
        id:4,
        category: 'gadget',
        productName: 'Hawk Motion Sensor',
        productPrice: 'R2500',
        description: '24h response |Supports up to 4 camera | Emergency number dail | inbuild self chargecharge',
        isOff: false,
        isAvailable: false,
        productImage:  require('../Database/Products/Lsenor3.jpg'), 
        productImageList:[
            require('../Database/Products/Lsenor3.jpg'),
            require('../Database/Products/Lsensor2.jpg'),
            require('../Database/Products/Lsensor1 .jpg'),
        ]
    },
    
    
]
