import { sql } from '@vercel/postgres';
import { Product, Category, Artisan } from './definitions';
import { formatCurrency } from './utils';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchAllProducts() {
  try {
    const data =
      await sql<Product>`SELECT p.id, p.pname, p.price, p.quantity, p.product_description,
      p.artisan_id, a.artisanfname, a.artisanlname, a.artisanemail, p.category_id, c.categoryname
      FROM products p
      JOIN artisans a ON p.artisan_id = a.id JOIN categories c ON p.category_id = c.id ORDER BY p.id;`;
      // console.log(`fetchAllPeoducts : ${data.rows}`)
    return data.rows;
    
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch products.');
  }
}

const ITEMS_PER_PAGE = 6;

export async function fetchFilteredProducts(
  query: string,
  currentPage: number
) {
  noStore();

  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const products =
      await sql<Product>`SELECT p.id, p.pname, p.price, p.quantity, p.product_description,
      p.artisan_id, a.artisanfname, a.artisanlname, a.artisanemail, p.category_id, c.categoryname
      FROM products p
      JOIN artisans a ON p.artisan_id = a.id JOIN categories c ON p.category_id = c.id
      WHERE
        p.pname ILIKE ${`%${query}%`}
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset};
    `;
    //console.log(products.rows);
    
    return products.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch filtered products.');
  }
}

export async function fetchAllProductsByCategory(categoryId: number) {
  try {
    const data =
      await sql<Product>`SELECT p.id, p.pname, p.price, p.quantity, p.product_description,
      p.artisan_id, a.artisanfname, a.artisanlname, a.artisanemail, p.category_id, c.categoryname
      FROM products p
      JOIN artisans a ON p.artisan_id = a.id JOIN categories c ON p.category_id = c.id WHERE ${categoryId} = p.category_id ORDER BY p.id;`;
      // console.log(data.rows)
      return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch products.');
  }
}

export async function fetchProductById(productId: number) {
  try {

    // console.log(`Fetch : ${productId}`)
    console.log('Fetching Product by ID data...');
    // await new Promise((resolve) => setTimeout(resolve, 2000));

    const data =
      await sql<Product>`SELECT * FROM products p JOIN artisans a ON p.artisan_id = a.id JOIN categories c ON p.category_id = c.id WHERE ${productId} = p.id;`;
      // console.log(`fetch : ${data.rows}`)
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch products.');
  }
}


export async function fetchProductByArtisanId(artisanId: number) {
  try {
    const data =
      await sql<Product>`SELECT p.id, p.pname, p.price, p.quantity, p.product_description,
      p.artisan_id, a.artisanfname, a.artisanlname, a.artisanemail, p.category_id, c.categoryname
      FROM products p
      JOIN artisans a ON p.artisan_id = a.id JOIN categories c ON p.category_id = c.id WHERE ${artisanId} = a.id ORDER BY p.id;`;

      // console.log(data.rows)
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch products.');
  }
}


export async function fetchAllCategories() {
  try {

    console.log('Fetching Categories data...');
    // await new Promise((resolve) => setTimeout(resolve, 2000));

    const data = await sql<Category>`SELECT * FROM categories`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch categories.');
  }
}

export async function fetchCategoryById(categoryId: number) {
  try {
    const data =
      await sql<Category>`SELECT * FROM categories WHERE id = ${categoryId}`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch categories.');
  }
}

export async function fetchAllArtisan() {
  try {

    console.log('Fetching Artisan data...');
    // await new Promise((resolve) => setTimeout(resolve, 2000));

    const data = await sql<Artisan>`SELECT * FROM artisans`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch categories.');
  }
}

export async function fetchArtisanById(artisanId: number) {
  try {
    const data =
      await sql<Artisan>`SELECT * FROM artisans WHERE ${artisanId} = id`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch categories.');
  }
}
