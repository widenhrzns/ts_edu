// Запрос в виде платежа
// {
//     "sum": 10000,
//     "from": 2,
//     "to": 4
// }
// Ответ
// {
//     "status": "success",
//     "data": {
//         "databaseId": 567,
//         "sum": 10000,
//         "from": 2,
//         "to": 4
//     }
// },
// {
//     "status": "failed",
//     "data": {
//         "errorMessage": "Недостаточно средств",
//         "errorCode": 4
//     }
// }

interface IPayment {
  sum: string;
  from: number;
  to: number;
}

enum PaymentStatus {
  SUCCESS = "success",
  FAILED = "failed",
}

interface IDataSuccess extends IPayment {
  databaseId: number;
}
interface IDataFailed {
  errorMessage: string;
  errorCode: number;
}

interface IPaymentRequest extends IPayment {}

// interface IResponse {
//   status: PaymentStatus; // но может упасть как succes так и failed а data не зависит
//   data: IDataSuccess | IDataFailed;
// }

interface IResponseSuccess {
  status: PaymentStatus.SUCCESS;
  data: IDataSuccess;
}
interface IResponseFailed {
  status: PaymentStatus.FAILED;
  data: IDataFailed;
}

// function get(): IResponseSuccess | IResponseFailed{}
