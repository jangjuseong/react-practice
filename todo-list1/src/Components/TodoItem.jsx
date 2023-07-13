import React from 'react';

const TodoItem = ({
  list,
  deleteHandler,
  updateHandler,
  editHandler,
  finishedHandler,
}) => {
  return (
    <>
      {list.map((item, index) => (
        <div className='flex flex-col' key={index}>
          <div>
            {item.isEditing ? (
              <>
                <input
                  type='text'
                  className='border'
                  value={item.value}
                  onChange={e => updateHandler(index, e.target.value)}
                />
                <button
                  onClick={() => finishedHandler(index)}
                  className='ml-2 border'
                >
                  수정 완료
                </button>
              </>
            ) : (
              <>
                <span>{item.value}</span>
                <button
                  onClick={() => editHandler(index)}
                  className='ml-2 border'
                >
                  수정
                </button>
              </>
            )}
            <button
              onClick={() => deleteHandler(index)}
              className='ml-2 border'
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default TodoItem;
