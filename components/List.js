// import React, { useState } from 'react';
// import { api } from '../../services/api';



// /*const userData = (username) => {
//     fetch(
//         `https://api.github.com/users/${username}`
//     ).json();
//     if (userData.message === 'Not Found') {
//         console.log("user not found");
//         return null;
//     }
//     console.log("plm");
//     // Get repositories
//     const repositories = fetch(userData.repos_url).json();
//     console.log(repositories);
// };*/

// const ListComp = () => {
//     const { navigate } = useNavigation();

//     const [repositorySearch, setRepositorySearch] = useState('');

//     const [responseRepos, setResponseRepos] = useState([]);
//     const [countResponseRepos, setCountResponseRepos] = useState('');
//     const [pageResponseRepos, setPageResponseRepos] = useState(0);

//     const [loadingRepos, setLoadingRepos] = useState(false);

//     const LIMIT_PAGE = 100;

//     async function handleSearch(type) {

//         if (repositorySearch === '' || repositorySearch === undefined) {
//             return
//         }

//         if (loadingRepos) {
//             return
//         }

//         setLoadingRepos(true);

//         const response = await api.get(`repositories?q=${repositorySearch}&sort=help-wanted-issues&order=desc&page=${pageNumber}&per_page=${LIMIT_PAGE}`, {
//             "Accept": "application/vnd.github.v3+json"
//         });

//         const { total_count, items } = response.data;

//         setLoadingRepos(false);

//         switch (type) {
//             case 'HANDLE_FORM':
//                 setResponseRepos(items);
//                 break;

//             case 'HANDLE_PAGE':
//                 setResponseRepos([...responseRepos, ...items]);
//                 break;
//         }

//         setCountResponseRepos(total_count);

//     }

// };

// export default userData;
// export default ListComp;