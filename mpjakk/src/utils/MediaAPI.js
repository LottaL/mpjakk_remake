export const getAllMedia = () => {
    const url = 'http://media.mw.metropolia.fi/wbma/media';
    return fetch(url)
    .then(res => res.json())
    .then((res) => {
      //console.log(res);

      return Promise.all(res.map(item => {
        //console.log(item.file_id);
        return fetch(url + '/' + item.file_id)
          .then(response => response.json())
      }))
      .then(items => {
        console.log(items);
        //this.setState({data: items});
        return items;
      });
    })
    .catch(err => console.log(err));
    
}

export const getSingleMedia = (id) => {
  const url = 'http://media.mw.metropolia.fi/wbma/media';
  return fetch(url + '/' + id)
  .then(res => res.json())
  .then(res => res)
  .catch(err => console.log(err))
}