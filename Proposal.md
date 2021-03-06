# Gift Registry
The application is a meeting point between an online registry and wishlist utilizing a React frontend, DynamoDB for the backend and product information from Amazon ([Rainforest API](https://www.rainforestapi.com/)). Backend for the project can be found [here](https://github.com/kimbaldeo/giftreg-backend). 

## Users will be able to...
1. create an account the holds wishlist data
2. create wishlists using products from Amazon
3. have guests contribute funds to their product wishlists
4. update their wishlist

### Models
**User** Related to Products and Comments
UserID		
Name		
Username	
Password

**Product** Related to User and Comments
Name
Amazon URL
Cost
Contributions

**Comments** Related to Products and User
Name
Comment
Timestamp


### User's Wishlist Page
![img](https://i.imgur.com/qVwIaIA.jpg)

### Item Page
![img](https://i.imgur.com/287QpYe.jpg)

### Add to Wishlist Form
![img](https://i.imgur.com/BS7Ysd6.jpg)

### Contribution Form
![img](https://i.imgur.com/TYKDu8m.jpg)

