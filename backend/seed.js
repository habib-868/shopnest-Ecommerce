const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');

const connectDB = require('./config/db');

const User = require('./model/user');
const Product = require('./model/product');
const Order = require('./model/Order');

dotenv.config();

connectDB();

const importData = async () => {
  try {
    // Clear old data
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();

    console.log('🗑 Old data removed');

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('password123', salt);

    // Create users
    const users = await User.insertMany([
      {
        name: 'Admin User',
        email: 'admin@shopnest.com',
        password: hashedPassword,
        role: 'admin',
        verified: true
      },
      {
        name: 'John Doe',
        email: 'john@example.com',
        password: hashedPassword,
        role: 'user',
        verified: true
      }
    ]);

    console.log('✅ Users inserted');

    // Create products
    const products = await Product.insertMany([
      {
        name: 'Wireless Noise-Cancelling Headphones',
        description:
          'Immersive sound experience with advanced active noise cancellation.',
        price: 299.99,
        category: 'Electronics',
        stock: 15,
        imageUrl:
          'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        rating: 4.8,
        numReviews: 24
      },
      {
        name: 'Minimalist Modern Chair',
        description:
          'A stylish and comfortable addition to any contemporary living room.',
        price: 150.0,
        category: 'Furniture',
        stock: 30,
        imageUrl:
          'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        rating: 4.2,
        numReviews: 12
      },
      {
        name: 'Professional DSLR Camera',
        description:
          'Capture stunning moments with high-resolution clarity and speed.',
        price: 1199.99,
        category: 'Electronics',
        stock: 8,
        imageUrl:
          'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        rating: 4.9,
        numReviews: 50
      },
      {
        name: 'Classic White Sneakers',
        description:
          'Versatile and comfortable, a staple for any casual outfit.',
        price: 85.0,
        category: 'Clothing',
        stock: 50,
        imageUrl:
          'https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        rating: 4.5,
        numReviews: 89
      }
    ]);

    console.log('✅ Products inserted');

    // Create orders
    await Order.insertMany([
  {
    userId: users[1]._id,
    items: [
      {
        productId: products[0]._id,
        qty: 1,
        price: products[0].price
      },
      {
        productId: products[3]._id,
        qty: 2,
        price: products[3].price
      }
    ],
    totalAmount: 469.99,
    address: {
      fullName: 'John Doe',
      street: '123 Main Street',
      city: 'New York',
      state: 'NY',
      postalCode: '10001',
      country: 'USA'
    },
    paymentId: 'PAY123456789',
    status: 'Pending'
  }
]);

    console.log('✅ Orders inserted');

    console.log('🎉 Data Imported Successfully!');

    process.exit();
  } catch (error) {
    console.error(`❌ Error with data import: ${error.message}`);
    process.exit(1);
  }
};

importData();