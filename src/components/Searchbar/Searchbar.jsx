import {
  Header,
  Form,
  SearchButton,
  SearchButtonLabel,
  SearchInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  return (
    <Header className="Searchbar">
      <Form className="SearchForm" onSubmit={onSubmit}>
        <SearchButton className="SearchForm-button" type="submit">
          <SearchButtonLabel className="SearchForm-button-label">
            Search
          </SearchButtonLabel>
        </SearchButton>
        <SearchInput
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </Form>
    </Header>
  );
};
