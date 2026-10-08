# Discount Module

## Overview

The Discount Module calculates the final price of an order by applying multiple discount campaigns to items in a shopping cart.

## Features

* Calculate the final price of an order.
* Apply multiple discount campaigns to shopping cart items.
* Support different campaign types and categories.

## Data Structure

### Item

| Field      | Description     |
| ---------- | --------------- |
| `name`     | Item name       |
| `quantity` | Number of items |
| `price`    | Price per item  |
| `category` | Item category   |

### Campaign

| Field      | Description                      |
| ---------- | -------------------------------- |
| `type`     | Discount campaign type           |
| `category` | Campaign category, if applicable |

## API Endpoint

**Calculate Discount**

* **Method:** `POST`
* **Endpoint:** `/api/campaigns/calculate`

## Tech Stack

**Frontend**

* React
* TypeScript
* Tailwind CSS
* Axios

**Backend**

* .NET
* C#
