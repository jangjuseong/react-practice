import React from 'react';

const TodoItem = ({
  itemList,
  handleDelete,
  handleUpdate,
  handleEdit,
  handleFinish,
}) => {
  return (
    <>
      {itemList.map((item, index) => (
        <div className='flex flex-col' key={index}>
          <div>
            {item.isEditing ? (
              <>
                <input
                  type='text'
                  className='border'
                  value={item.value}
                  onChange={e => handleUpdate(index, e.target.value)}
                />
                <button
                  onClick={() => handleFinish(index)}
                  className='ml-2 border'
                >
                  수정 완료
                </button>
              </>
            ) : (
              <>
                <span>{item.value}</span>
                <button
                  onClick={() => handleEdit(index)}
                  className='ml-2 border'
                >
                  수정
                </button>
              </>
            )}
            <button onClick={() => handleDelete(index)} className='ml-2 border'>
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default TodoItem;
