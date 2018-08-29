import 'jest-enzyme';
import * as React from 'react';
import { shallow } from 'enzyme';
import NewsList from '../NewsList';

const mockNews = [
  {
    datetime: '2018-08-29T16:48:00-04:00',
    headline:
      'Walker & Dunlop Structures $19 Million in Financing for Affordable Senior Housing in Nashville',
    source: 'PR Newswire',
    url: 'https://api.iextrading.com/1.0/stock/market/article/8897357208527778',
    summary:
      '      BETHESDA, Md. ,  Aug. 29, 2018  /PRNewswire/ --  Walker &amp; Dunlop, Inc.  announced today that it structured  $19,491,400  in financing for the acquisition and rehabilitation of  Dandridge Towers . Located in  Nashville, Tennessee , a city and metropolitan area seeing rapid po…',
    related: [
      'BAN10320',
      'Banking and Finance',
      'Banking',
      'Commodities',
      'Federal',
      'Financial and Business Services',
      'Healthcare',
      'Market',
      'Market and Economy',
      'MARYLAND',
      'Mergers & Acquisitions',
      'Mortgage',
      'National News',
      'NYSE0001',
      'Real Estate',
      'SPE10320052',
      'TENNESSE',
      'WD'
    ],
    image:
      'https://api.iextrading.com/1.0/stock/market/news-image/8897357208527778'
  },
  {
    datetime: '2018-08-29T16:28:00-04:00',
    headline: 'STATE CHAMPS! Network Takes On Indiana High School Sports',
    source: 'PR Newswire',
    url: 'https://api.iextrading.com/1.0/stock/market/article/6142035451959578',
    summary:
      '         SOUTHFIELD, Mich. ,  Aug. 29, 2018  /PRNewswire/ --STATE CHAMPS! Sports Network  the Emmy Award-winning prep sports television show  is headed to  Indiana , and is primed to highlight the best of high school athletics throughout the entire Hoosier state.    With coo…',
    related: [
      'AWARDS01',
      'Broadcasting - TV',
      'Entertainment',
      'INDIANA1',
      'MICHIGAN',
      'National News',
      'Social Issues',
      'SPORTS'
    ],
    image:
      'https://api.iextrading.com/1.0/stock/market/news-image/6142035451959578'
  },
  {
    datetime: '2018-08-29T16:00:00-04:00',
    headline:
      'Karen Evans Ends Service on NIC Inc. Board of Directors Upon U.S. Department of Energy Confirmation',
    source: 'Business Wire',
    url: 'https://api.iextrading.com/1.0/stock/market/article/5635620641505470',
    summary:
      '     NIC Inc. (Nasdaq: EGOV), the nations leading provider of digital government solutions and secure payment processing, announces today that Karen Evans has been confirmed as Assistant Secretary for Cybersecurity, Energy Security and Emergency Response for the United States Department o…',
    related: [
      'APPSOFTW',
      'Computer Software',
      'EGOV',
      'Federal',
      'Futures Trading',
      'Investment Opinion',
      'NASDAQ01',
      'National News',
      'Oil & Energy',
      'SOF31165133',
      'Software',
      'Computing and Information Technology'
    ],
    image:
      'https://api.iextrading.com/1.0/stock/market/news-image/5635620641505470'
  },
  {
    datetime: '2018-08-29T15:42:00-04:00',
    headline:
      'Ravenswood awarded $1.3M contract in support of the US Army Joint Modernization Command',
    source: 'PR Newswire',
    url: 'https://api.iextrading.com/1.0/stock/market/article/6039426666894358',
    summary:
      '      FREMONT, Calif. ,  Aug. 29, 2018  /PRNewswire/ -- Ravenswood Solutions was awarded a  $1.3 million  contract in support of the US Army Joint Modernization Command (JMC), a subordinate of the larger Army Capabilities Integration Center (ARCIC), for communications support services during a Ne…',
    related: [
      'Aerospace and Defense',
      'Aerospace/Defense - Major Diversified',
      'Aerospace/Defense Products & Services',
      'Computer Hardware',
      'Computer',
      'Data Warehousing',
      'Electronics',
      'Financial',
      'Market',
      'Market and Economy',
      'National News',
      'Computing and Information Technology',
      'TEXAS001',
      'USARMY01'
    ],
    image:
      'https://api.iextrading.com/1.0/stock/market/news-image/6039426666894358'
  },
  {
    datetime: '2018-08-29T15:35:00-04:00',
    headline: 'AFGE Statement on OPM EO Guidance',
    source: 'PR Newswire',
    url: 'https://api.iextrading.com/1.0/stock/market/article/6807757386881474',
    summary:
      '      WASHINGTON ,  Aug. 29, 2018  /PRNewswire/ --  American Federation of Government Employees National President  J. David Cox Sr.  today issued  the following statement :          "As a direct result of the American Federation of Government Employees\' lawsuit against three union-busting,…',
    related: [
      'Economy Business and Finance',
      'Human Resources/Labor',
      'Market',
      'National News',
      'Non-Company'
    ],
    image:
      'https://api.iextrading.com/1.0/stock/market/news-image/6807757386881474'
  },
  {
    datetime: '2018-08-29T15:30:00-04:00',
    headline:
      "Statement from FDA Commissioner Scott Gottlieb, M.D., on FDA's support for exempting coffee from California's cancer warning law",
    source: 'PR Newswire',
    url: 'https://api.iextrading.com/1.0/stock/market/article/7700591245368231',
    summary:
      '     SILVER SPRING, Md., Aug. 29, 2018 /PRNewswire/ -- Ensuring that food is safe and truthfully labeled is one of our fundamental responsibilities at the U.S. Food and Drug Administration. Consumers deserve accurate information about the food they eat and how it can affect their health and nutri…',
    related: [
      'Beverages - Soft Drinks',
      'Biotechnology',
      'CALIFORN',
      'CANCER01',
      'Pharmaceutical',
      'FDA00001',
      'Federal',
      'Food and Beverage',
      'Healthcare',
      'Health Services',
      'Hospitals',
      'MEDICBAD',
      'National News',
      'NUTRITIO',
      'Wholesale and Retail',
      'Science',
      'State Politics'
    ],
    image:
      'https://api.iextrading.com/1.0/stock/market/news-image/7700591245368231'
  },
  {
    datetime: '2018-08-29T15:21:21-04:00',
    headline:
      'Freddie Mac, Tradeweb to create exchange path related to single-security initiative',
    source: 'SeekingAlpha',
    url: 'https://api.iextrading.com/1.0/stock/market/article/8190241031776538',
    summary:
      '     Freddie Mac ( OTCQB:FMCC )  starts a partnership  with Tradeweb Markets to develop a direct-to-Freddie Mac exchange path for institutional investors related to the single-security initiative.   More news on: Freddie Mac, Fannie Mae, Financial stocks news, Tech stocks news,     Read more … ...',
    related: [
      'BAN10320',
      'Financial and Business Services',
      'FMCC',
      'FNMA',
      'Market and Economy',
      'Mortgage',
      'National News',
      'OTCBULLB',
      'SPE10320052'
    ],
    image:
      'https://api.iextrading.com/1.0/stock/market/news-image/8190241031776538'
  },
  {
    datetime: '2018-08-29T14:30:00-04:00',
    headline:
      'Raytheon Company Appoints Roy Azevedo President, Space and Airborne Systems',
    source: 'PR Newswire',
    url: 'https://api.iextrading.com/1.0/stock/market/article/6591281935740806',
    summary:
      '      WALTHAM, Mass. , Aug.29, 2018 /PRNewswire/ --Raytheon Company (NYSE: RTN) Chairman and CEO  Thomas A. Kennedy  announced today the appointment of  Roy Azevedo  as President, Space and Airborne Systems, effective  September 1, 2018 . Azevedo, 57, has been elected a corporate offi…',
    related: [
      'AER31052',
      'AER31052107',
      'Aerospace and Defense',
      'Aerospace/Defense - Major Diversified',
      'Aerospace/Defense Products & Services',
      'Economy Business and Finance',
      'Commodities',
      'Computer',
      'DEMOCRAT',
      'Electronics',
      'IND310',
      'Industrial Goods',
      'Investment Opinion',
      'Market',
      'MASSACHU',
      'National News',
      'NYSE0001',
      'Politics',
      'RTN',
      'SAUDARAB',
      'Computing and Information Technology',
      'TEXAS001',
      'USAIRFOR'
    ],
    image:
      'https://api.iextrading.com/1.0/stock/market/news-image/6591281935740806'
  },
  {
    datetime: '2018-08-29T14:06:52-04:00',
    headline: 'McCain memorialized at Arizona State Capitol',
    source: 'UPI',
    url: 'https://api.iextrading.com/1.0/stock/market/article/5883366082531339',
    summary:
      "   Aug. 29 (UPI) --   Late Sen. John McCain's casket arrived at the Arizona State Capitol on Wednesday morning, where friends, family and colleagues memorialized  Arizona's favorite adopted son.    The longtime senator will lie in state in the building Wednesday before a service at North Phoenix …",
    related: [
      'ARIZONA1',
      'FUNERALS',
      'MEDICBAD',
      'Meetings',
      'National News',
      'Social Issues',
      'State Politics'
    ],
    image:
      'https://api.iextrading.com/1.0/stock/market/news-image/5883366082531339'
  },
  {
    datetime: '2018-08-29T13:55:00-04:00',
    headline: 'Advice on Buying American-Made Cars This Labor Day',
    source: 'PR Newswire',
    url: 'https://api.iextrading.com/1.0/stock/market/article/5197592586889330',
    summary:
      '      CHICAGO , Aug.29, 2018 /PRNewswire/ --Labor Day has become synonymous with discounts and deals for car buyers, but if you\'re in the market for a new vehicle, keep in mind this holiday celebrates U.S. workers  and finding a vehicle that\'s "Made in America" and supports th…',
    related: [
      'AUT10209',
      'AUT10209016',
      'Automotive',
      'BOWLING1',
      'CARS',
      'CON102',
      'Human Resources/Labor',
      'ILLINOIS',
      'LONDON01',
      'Manufacturing and Engineering',
      'MARKETIN',
      'National News',
      'NYSE0001',
      'OHIOOHIO',
      'Transportation'
    ],
    image:
      'https://api.iextrading.com/1.0/stock/market/news-image/5197592586889330'
  }
];

describe('<NewsList />', () => {
  it('should render a link for each article', () => {
    const wrap = shallow(<NewsList news={mockNews} />);

    expect(wrap.find('a').length).toEqual(mockNews.length);
  });

  it('each link should have a "href" property matching the articles url', () => {
    const wrap = shallow(<NewsList news={mockNews} />);

    for (const article of mockNews) {
      expect(wrap.find(`[href="${article.url}"]`).exists()).toEqual(true);
    }
  });
});
