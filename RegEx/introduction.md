+)  RegEx(Regular Expression - Biểu thức chính quy)
        - Tập hợp những quy tắc, dựa vào quy tắc đó để viết ra những biểu thức để so khớp các chuỗi với nhau.
        - Thư viện nâng cao để xử lí chuỗi

+)  Cú pháp
        Cú pháp:  /pattern/modifiers
        - pattern là chuỗi Regular Expression
        - modifiers là thông số cấu hình cho chuỗi pattern:
        i: So khớp không quan tâm đến chữ hoa hoặc chữ thường
        g: So khớp toàn bộ chuỗi cần tìm
        m: So khớp luôn cả dữ liệu xuống dòng

+) Hàm test() 
        - Dùng để kiểm thử 1 biểu thức Regular Expression
        - Cú pháp: /pattern/.test(string)
        
+) Kí tự bắt đầu và kí kết thúc
        + Cú pháp: /^pattern$/
        ^ là khai báo bắt đầu chuỗi
        $ là khai báo kết thúc chuỗi

+) 1 số kí hiệu đặc biệt
        [a-z], [0-9]: - Khớp với bất kỳ ký tự nào nằm trong dấu ngoặc vuông.
                            - Nếu dấu ^ nằm trong dấu ngoặc vuông thì sẽ so khớp với  chuỗi không có kí tự theo sau dấu ^.
        \d , [0-9]: Khớp với bất kỳ các ký tự là số, với /D thì ngược lại.
        \w : Khớp với bất kỳ ký tự là số, chữ cái, dấu gạch dưới.
        + : Khớp với ký tự hoặc biểu thức xuất hiện đằng trước 1 hoặc nhiều lần.
        * : Khớp với ký tự hoặc biểu thức xuất hiện đằng trước 0 lần hoặc nhiều lần.
        ? : Khớp với ký tự xuất hiện đằng trước 0 lần hoặc 1 lần.
        ^ : Khớp với chuỗi bắt đầu là 1 chuỗi.(VD: /^Binh/.test('Binh Khanh')) => true.
        $: Khớp với chuỗi kết thúc là 1 chuỗi đứng trước dấu $. (VD: /Khanh$/.test('Binh Khanh')) => false
        {n,m}: Khớp với kí tự hoặc biểu thức xuất hiện đằng trước nó ít nhất là n lần và nhiều nhất là m lần.
        {n}: Khớp với ký tự hoặc biểu thức xuất hiện đằng trước nó là n lần.
        {n,} : Khớp với ký tự hoặc biểu thức xuất hiện đằng trước nó ít nhất là n lần.
        