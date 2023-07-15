# NAMED ENTITY RECOGNITION

## Giới thiệu

Đồ án nhóm cuối kỳ:

- 20120330 - Phạm Anh Minh
- 20120475 - Nguyễn Minh Hiếu

## Cách chạy Local Hosting

Tải project từ Github về máy, thực hiện như sau:

- Cách 1:
  - Download file .zip của Project này từ Github về máy
  - Giải nén file .zip
- Cách 2:
  - Mở terminal trên máy
  - Clone project bằng lệnh
  ```terminal
  git clone https://github.com/nm-hieu/Named-Entity-Recognition.git
  ```

Sau khi tải Project từ GitHub về máy local, ta thực hiện các bước sau:

- Bước 1: 
  - Đảm bảo máy tính đã có cài đặt [Node.js](https://nodejs.org/en). Nếu chưa thì tiến hành tải về cài đặt trên máy tính. 
  - Đảm bảo máy tính đã có cài đặt [Git LFS](https://git-lfs.com/) để tải các file LFS (Large File Storage) của model
  - Đảm bảo máy tính đã có cài đặt package cần thiết, nếu chưa thì tiến hành cài đặt:
    - Điều hướng qua folder model/output. Gõ lệnh `cd model/output`
    - Trên terminal gõ lệnh `pip install --user -r requirement.txt`
    
    Hoặc cài đặt trực tiếp các package ở dưới:
    
    - Tranformers: Trên terminal gõ lệnh `pip install --user transformers`. Hoặc làm theo hướng dẫn [ở đây](https://huggingface.co/learn/nlp-course/chapter0/1?fw=pt)
    - PyTorch: Trên terminal gõ lệnh `pip install --user torch`. Hoặc làm theo hướng dẫn [ở đây](https://github.com/pytorch/pytorch#from-source)
  - Nếu đã cài đặt đầy đủ thì chuyển sang Bước 2
- Bước 2: Điều hướng sang folder web, vào terminal gõ lệnh `cd web`
- Bước 3: Đảm bảo máy thực hiện có đầy đủ các dependency, package, module cần thiết. Nếu chưa có thì qua Terminal để sử dụng lệnh `npm install`, nếu đã cài đặt đầy đủ thì qua Bước 4
- Bước 4: Cũng trên Terminal, thực hiện lệnh `npm start`. Browser mặc định của máy sẽ host React App trên port 3000

## Demo

Link Video: Chưa cập nhập
