export const dictionaryColumns = [
  {
    Header: 'Dictionary',
    columns: [
      {
        Header: 'Word',
        accessor: 'word',
      },
      {
        Header: 'Definition',
        accessor: 'definition',
      },
      {
        Header: 'Example',
        accessor: 'example',
      },
      {
        Header: 'Sound',
        accessor: 'sound_urls',
      },
    ],
  },
];

export const getAudioFromDetails = (details = []) => {
  const audios = new Set();
  details.map(detail => audios.add(detail?.['phonetics']?.[0]?.['audio']));
  return [...audios].filter(audio => Boolean(audio));
}
