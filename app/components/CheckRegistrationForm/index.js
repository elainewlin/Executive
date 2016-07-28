import React, { PropTypes } from 'react';

import styles from './styles.css';
import CheckRegistrationField from 'components/CheckRegistrationField';

function CheckRegistrationForm(props) {
  // hardcoding formFields for the time being, get from props.formFields after the API is hooked up
  const fields = [
    {
      name_attr: 'ctl00$MainContent$txtFirstName',
      label: 'First name',
      width: 12,
      conf: '^.{1,15}$',
      type: 'TEXT',
      order: 1,
    },
    {
      name_attr: 'ctl00$MainContent$txtLastName',
      label: 'Last name',
      width: 12,
      conf: '^.{1,25}$',
      type: 'TEXT',
      order: 2,
    },
    {
      name_attr: 'ctl00$MainContent$ddlMonth',
      label: 'Month',
      width: 6,
      conf: '--:0,January:1,February:2,March:3,April:4,May:5,June:6,July:7,August:8,September:9,October:10,November:11,December:12',
      type: 'SELECT',
      order: 3,
    },
    {
      name_attr: 'ctl00$MainContent$ddlDay',
      label: 'Day',
      width: 3,
      conf: '--:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:10,11:11,12:12,13:13,14:14,15:15,16:16,17:17,18:18,19:19,20:20,21:21,22:22,23:23,24:24,25:25,26:26,27:27,28:28,29:29,30:30,31:31',
      type: 'SELECT',
      order: 4,
    },
    {
      name_attr: 'ctl00$MainContent$ddlYear',
      label: 'Year',
      width: 3,
      conf: '--:0,1998:1998,1997:1997,1996:1996,1995:1995,1994:1994,1993:1993,1992:1992,1991:1991,1990:1990,1989:1989,1988:1988,1987:1987,1986:1986,1985:1985,1984:1984,1983:1983,1982:1982,1981:1981,1980:1980,1979:1979,1978:1978,1977:1977,1976:1976,1975:1975,1974:1974,1973:1973,1972:1972,1971:1971,1970:1970,1969:1969,1968:1968,1967:1967,1966:1966,1965:1965,1964:1964,1963:1963,1962:1962,1961:1961,1960:1960,1959:1959,1958:1958,1957:1957,1956:1956,1955:1955,1954:1954,1953:1953,1952:1952,1951:1951,1950:1950,1949:1949,1948:1948,1947:1947,1946:1946,1945:1945,1944:1944,1943:1943,1942:1942,1941:1941,1940:1940,1939:1939,1938:1938,1937:1937,1936:1936,1935:1935,1934:1934,1933:1933,1932:1932,1931:1931,1930:1930,1929:1929,1928:1928,1927:1927,1926:1926,1925:1925,1924:1924,1923:1923,1922:1922,1921:1921,1920:1920,1919:1919,1918:1918,1917:1917,1916:1916,1915:1915,1914:1914,1913:1913,1912:1912,1911:1911,1910:1910,1909:1909,1908:1908,1907:1907,1906:1906,1905:1905,1904:1904,1903:1903,1902:1902,1901:1901,1900:1900',
      type: 'SELECT',
      order: 5,
    },
    {
      name_attr: 'ctl00$MainContent$txtZip',
      label: 'Zip code',
      width: 12,
      conf: '^[0-9]{1,5}$',
      type: 'TEXT',
      order: 6,
    },
    {
      name_attr: 'ctl00$MainContent$chkUnderstand',
      label: 'I understand this statement and agree.',
      width: 12,
      conf: 'This webpage is intended for use by the individual voter to determine his or her voter registration status and other information related to voting. Access or attempted access to information that is exempt from public disclosure other than to you as the voter may subject you to criminal prosecution or civil liability.',
      type: 'CHECK',
      order: 7,
    },
  ];

  const entries = [];
  for (let i = 0; i < fields.length; i++) {
    const field = fields[i];
    entries.push(<CheckRegistrationField field={field} key={field.name_attr} />);
  }

  function handleSubmit(e) {
    e.nativeEvent.preventDefault();
    console.log('form submitted');
    // props.submitForm();
  }

  return (
    <form onSubmit={handleSubmit}>
      {entries}
      <div className='form-group col-xs-12'>
        <button type='submit' className='submit btn btn-default'>Check now</button>
      </div>
    </form>
  );
}

export default CheckRegistrationForm;
