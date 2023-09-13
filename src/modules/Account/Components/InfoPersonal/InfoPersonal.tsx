import { useState } from "react";
import { useSelector } from "react-redux";
import useEditState from "../../../../hooks/useEditState";
import {
  useGetAccountByIdQuery,
  useUpdateAccountMutation,
} from "../../../../services/accountService";
import { Account } from "../../../../types/account";
interface IProp {
  label: string;
  value: string;
  refresh: () => void;
}
function InfoPersonal({ label, value, refresh }: IProp) {
  const { isEditing, handleEditClick, handleSaveClick } = useEditState();
  const [editedValue, setEditedValue] = useState(value);
  const { user } = useSelector((state: any) => state.userSetting);
  const { data: account } = useGetAccountByIdQuery(user.id);

  const [updateAccount] = useUpdateAccountMutation();
  const handleSave = () => {
    if (account.id) {
      const updatedData: Account = {
        id: account.id,
        userId: user.id,
        ...account,
        [label.toLowerCase()]: editedValue,
      };

      updateAccount({ id: account.id, userId: user.id, body: updatedData })
        .unwrap()
        .then(() => {
          // handleEditClick();
          refresh();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div className="flex justify-between items-center mb-4 shadow-md  rounded-md bg-[#f0f0f0]">
      <div className="p-4 basis-5/6">
        {!isEditing ? (
          <div>
            <p className="text-lg font-semibold mb-2">{label}</p>
            <p>{value}</p>
          </div>
        ) : (
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                {label}
              </label>
              <input
                type="text"
                className="mt-1 p-2 block w-full border "
                defaultValue={value}
                value={editedValue}
                onChange={(e) => {
                  setEditedValue(e.target.value);
                }}
              />
            </div>
            {/* Thêm các trường thông tin cần chỉnh sửa */}
          </form>
        )}
      </div>
      <div className="basis-1/6">
        {!isEditing ? (
          <button
            onClick={() => {
              handleEditClick();
            }}
            className="text-blue-500 hover:underline"
          >
            Chỉnh sửa
          </button>
        ) : (
          <button
            onClick={() => {
              handleSaveClick();
              handleSave();
            }}
            className="text-green-500 hover:underline"
          >
            Lưu
          </button>
        )}
      </div>
    </div>
  );
}

export default InfoPersonal;
