import { LoadMoreBtn, LoadMoreBtnWrap } from './Button.styled';

export const Button = ({ onLoadMore }) => {
  return (
    <LoadMoreBtnWrap>
      <LoadMoreBtn type="button" onClick={onLoadMore}>
        Load more
      </LoadMoreBtn>
    </LoadMoreBtnWrap>
  );
};
