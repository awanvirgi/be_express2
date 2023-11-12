# Todolist RESTful API Documentation

## Deskripsi

Ini adalah dokumentasi untuk Todolist RESTful API. API ini memungkinkan pengguna untuk membuat, mengambil, memperbarui, dan menghapus tugas pada daftar pekerjaan (todolist) dan setiap pengguna memiliki akun yang menjadikan Todolist tidak bisa digunakan oleh pengguna lain.

## Endpoint

### Daftar Endpoint
-**POST /auth/login**: Melakukan Login akun.
-**POST /auth/regist**: Membuat Akun baru.
- **GET /users/todos**: Mendapatkan daftar semua tugas yang dimilki setiap akun.
- **GET /users/todos/{taskId}**: Mendapatkan detail tugas berdasarkan ID.
- **POST /users/todos**: Membuat tugas baru.v
- **PATCH /users/todos/{taskId}**: Memperbarui tugas berdasarkan ID.
- **PATCH /users/todos/{taskId}/toggle**: Memperbarui status tugas berdasarkan ID.
- **DELETE /users/todos/{taskId}**: Menghapus tugas berdasarkan ID.
- **DELETE /users/todos/**: Menghapus semua tugas berdasarkan userId (Berdasarkan Akun).

## Penggunaan

### **Melakukan Login Akun**

```http
POST /auth/login
```
#### Body
```http
{
  "email":"testo@gmail.com",
  "password":"123"
}
```
#### Respon
```http
{
  "message": "Berhasil Terlogin",
  "data": {
    "user": 6,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJ0ZXN0b0BnbWFpbC5jb20iLCJpYXQiOjE2OTk3OTgwMDV9.C1bET5OXno9vzFYWmOY7gsI_gukAUsqg-cMXycivgNw"
  }
}
```
&nbsp;
### **Membuat Akun baru (Registtrasi)**
```http
POST /auth/regist
```

#### Body
```http
{
  "name":"awan",
  "email":"testo@gmail.com",
  "password":"123"
}
```

#### Respon
```http
{
  "message": "Akun Berhasil Dibuat"
}
```
&nbsp;
### **Menampilkan Semua tugas yang terbuat dalam suatu akun**

```http
GET /users/todos
```
#### Header
```http
Accept: */*
User-Agent: Thunder Client (https://www.thunderclient.com)
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJ0ZXN0sMTU5QGdtYWlsLmNvbSIsImlhdCI6MTY5OTc5NjM5OH0.SBMJiaKEWWu6HL2bo1hcUlpVriPJNebES9TVm-OZUW4
```
#### Respon
```http
{
  "message": "Berhasil menampilkan Todo",
  "todos": [
    {
      "id": 10,
      "title": "Belajar MYSQL",
      "detail": "Belajar mengelola database dengan mysql",
      "status": false,
      "user_id": 6,
      "createdAt": "2023-11-12T14:10:52.000Z",
      "updatedAt": "2023-11-12T14:10:52.000Z"
    }
  ]
}
```
&nbsp;
### **Menanpilkan Tugas Berdasarkan ID**
```http
GET /users/todos/{taskId}
```
#### Parameter
Membutuhkan {taskId} untuk menampilkan Id berdasarkan yang dipilih
&nbsp;
#### Respon
```http
{
  "message": "Berhasil menampilkan detail Todo",
  "todos": [
    {
      "id": 10,
      "title": "Belajar MYSQL",
      "detail": "Belajar mengelola database dengan mysql",
      "status": false,
      "user_id": 6,
      "createdAt": "2023-11-12T14:10:52.000Z",
      "updatedAt": "2023-11-12T14:10:52.000Z"
    }
  ]
}
```

&nbsp;
### **Membuat tugas baru**
```http
POST /users/todos
```
#### Body
```http
{
  "data": {
    "title": "Belajar MYSQL",
    "detail": "Belajar mengelola database dengan mysql"
  }
}
```
#### Header
```http
Accept: */*
User-Agent: Thunder Client (https://www.thunderclient.com)
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJ0ZXN0b0BnbWFpbC5jb20iLCJpYXQiOjE2OTk3OTgwMDV9.C1bET5OXno9vzFYWmOY7gsI_gukAUsqg-cMXycivgNw
```

#### Respon
```http
{
  "message": "Berhasil Membuat Todos",
  "userId": 6,
  "title": "Belajar MYSQL"
}
```
### **Toggle Status Tugas**
```http
GET /users/todos/{tugasId}/toggle
```
#### Header
```http
Accept: */*
User-Agent: Thunder Client (https://www.thunderclient.com)
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJ0ZXN0b0BnbWFpbC5jb20iLCJpYXQiOjE2OTk3OTgwMDV9.C1bET5OXno9vzFYWmOY7gsI_gukAUsqg-cMXycivgNw
```
#### Respon
```http
{
  "message": "Berhasil merubah status Todo"
}
```

&nbsp;
### **Membuat tugas**
```http
POST /users/todos/{tugasId}
```
#### Body
```http
{
  "data": {
    "title": "Belajar MYSQL",
    "detail": "Belajar mengelola database dengan mysql 2"
  }
}
```
#### Header
```http
Accept: */*
User-Agent: Thunder Client (https://www.thunderclient.com)
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJ0ZXN0b0BnbWFpbC5jb20iLCJpYXQiOjE2OTk3OTgwMDV9.C1bET5OXno9vzFYWmOY7gsI_gukAUsqg-cMXycivgNw
```

#### Respon
```http
{
  "message": "Berhasil edit Todo"
}
```
&nbsp;
### **Menghapus Semua berdasarkan Id Tugas**
```http
DELETE /users/todos/{tugasId}
```

#### Header
```http
Accept: */*
User-Agent: Thunder Client (https://www.thunderclient.com)
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJ0ZXN0b0BnbWFpbC5jb20iLCJpYXQiOjE2OTk3OTgwMDV9.C1bET5OXno9vzFYWmOY7gsI_gukAUsqg-cMXycivgNw
```

#### Respon
```http
{
  "message": "Berhasil Hapus Todo berdasarkan id"
}
```
&nbsp;
### **Menghapus Semua Tugas berdasarkan Id User**
```http
DELETE /users/todos/
```

#### Header
```http
Accept: */*
User-Agent: Thunder Client (https://www.thunderclient.com)
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJ0ZXN0b0BnbWFpbC5jb20iLCJpYXQiOjE2OTk3OTgwMDV9.C1bET5OXno9vzFYWmOY7gsI_gukAUsqg-cMXycivgNw
```

#### Respon
```http
{
  "message": "Berhasil Hapus Todo berdasarkan User id"
}
```



