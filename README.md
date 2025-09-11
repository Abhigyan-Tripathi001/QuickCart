# 🛒 QuickCart ➤ Shop Smart, Shop Fast ⚡  

A **Full-Stack E-commerce Web App** built using **Next.js, TailwindCSS, Clerk, MongoDB, Inngest & Cloudinary**.  
Users can browse and search for products, add them to the cart, checkout with address selection, and view their orders.  
Sellers can manage products and view orders via a dedicated **Seller Dashboard**.  

---

### ➥ 🌐 Live Website Links  

🔗 **Live App (User + Seller Panel)** →  👤 [quickcart.vercel.app](https://quick-cart-plum-pi.vercel.app/)  

---

## 📸 Screenshots  
> <img width="1919" height="908" alt="image" src="https://github.com/user-attachments/assets/41874bb4-c84a-47ad-8d0d-f9305223f739" />
> <img width="1919" height="902" alt="image" src="https://github.com/user-attachments/assets/f29a3e84-d1d5-40e5-b615-7d9c9a355957" />



---

## 💻 Tech Stack 🛠️  

#### 🚀 **Frontend**  
![Next.js](https://img.shields.io/badge/-Next.js-000000?style=flat-square&logo=next.js&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-06B6D4?style=flat-square&logo=tailwind-css&logoColor=white) ![Clerk](https://img.shields.io/badge/-Clerk-3B82F6?style=flat-square&logo=clerk&logoColor=white) ![Axios](https://img.shields.io/badge/-Axios-5A29E4?style=flat-square&logo=axios&logoColor=white) ![React Router](https://img.shields.io/badge/-React%20Router%20DOM-CA4245?style=flat-square&logo=react-router&logoColor=white)  

#### ⚙️ **Backend**  
![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/-Express.js-000000?style=flat-square&logo=express&logoColor=white) ![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white) ![Inngest](https://img.shields.io/badge/-Inngest-8B5CF6?style=flat-square&logo=inngest&logoColor=white) ![Cloudinary](https://img.shields.io/badge/-Cloudinary-3448C5?style=flat-square&logo=cloudinary&logoColor=white)  

#### 🧰 **Tools & Hosting**  
![Git](https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github&logoColor=white) ![Vercel](https://img.shields.io/badge/-Vercel-000000?style=flat-square&logo=vercel&logoColor=white) ![MongoDB Atlas](https://img.shields.io/badge/-MongoDB%20Atlas-47A248?style=flat-square&logo=mongodb&logoColor=white)  

---

## 🌟 Features 🧩  

#### 👥 User (Customer)  
- 🔍 Search products instantly with a **search bar**  
- 🛒 Add/remove items to cart  
- 📦 Checkout with address selection  
- 🧾 Track orders in **My Orders** page  
- 🔐 Secure login/signup with **Clerk**  

#### 🛍️ Seller Dashboard  
- ➕ Add new products with images (Cloudinary)  
- 📃 View & manage all listed products  
- 📦 View incoming customer orders  
- 🏷️ **Role-based seller access** via Clerk `user/metadata/public/role:"seller"`  

---

## 🤖 Technical Details 💡  

- **Next.js App Router** ➤ Server + Client rendering  
- **MongoDB + Mongoose** ➤ Products, users, orders storage  
- **Express.js** ➤ Backend routing & APIs  
- **Clerk Authentication** ➤ Secure user & seller login  
- **Inngest** ➤ Event-driven order handling  
- **Cloudinary** ➤ Product image storage  
- **Axios** ➤ API communication  
- **React Router DOM** ➤ Client-side navigation  
- **TailwindCSS** ➤ Responsive UI  

---

## 🚀 Deployment  

To run locally, clone the repository and follow the steps below:  

```bash
# Clone repository
git clone https://github.com/yourusername/quickcart.git
cd quickcart

# Install dependencies
npm install

# Run development server
npm run dev
```

---

📝 Don’t forget to configure .env files in folder with:

```bash
# MongoDB
MONGO_URI=your_mongo_uri

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret

# Cloudinary
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret

# Inngest
INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key
```
---

## 🙋🏻‍♂️ About Me
- Hi, I'm Abhigyan Tripathi 👨🏻‍💻
- A passionate Full-Stack Developer diving deep into MERN Stack, DSA, and building scalable web applications.
- Let’s connect and build cool stuff together! 🚀

---

## 📬 Contact & Links
- 💼 LinkedIn: https://www.linkedin.com/in/abhigyan-tripathi-819612305/
- 📧 Email: abhigyantripathi42@gmail.com





