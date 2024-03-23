import { Models } from 'appwrite';
import React from 'react'
import Loader from './Loader';
import GridPostList from './GridPostList';

type SearchResultsProps = {
  searchedPosts: Models.Document[];
  isSearchFetching: boolean;
}

const SearchResults = ({ searchedPosts, isSearchFetching }: SearchResultsProps) => {

  if(isSearchFetching) return <Loader />

  if(searchedPosts && searchedPosts.documents.length > 0) {
    return (
      <GridPostList posts={searchedPosts.documents} />
    )
  }

  return (
    <p className='text-light-4 mt-10 text-center w-full'>
      No Results Found
    </p>
  )
}

export default SearchResults