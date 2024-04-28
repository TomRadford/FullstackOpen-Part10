import { useQuery } from '@apollo/client';
import { GET_ME } from '../graphql/queries';

const useMe = () => useQuery(GET_ME);

export default useMe;
