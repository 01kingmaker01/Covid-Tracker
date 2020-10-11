import React, { useState, useEffect } from 'react';
import { fetchData } from '../../api';
import { Line } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = ({ country, data }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchData(country));
    };
    fetchAPI();
  }, [setDailyData, country]);

  if (dailyData.length) {
    var deathPer = Math.round(
      (dailyData[0].total_deaths / dailyData[0].total_cases) * 100
    );

    var dailyDataUpdated = dailyData.filter((e) => {
      return e.last_update.match(`01T`); //|| e.last_update.match(todaysDate);
    });
    dailyDataUpdated.unshift(dailyData[0]);
    dailyDataUpdated.push(dailyData[dailyData.length - 1]);
  }

  const lineChart = dailyData.length ? (
    <Line
      data={{
        // labels:dateData ,
        labels: dailyDataUpdated.map(({ last_update }) =>
          new Date(last_update).toDateString()
        ),
        datasets: [
          {
            data: dailyDataUpdated.map(
              ({ total_recovered }) => total_recovered
            ),
            label: 'Recovered',
            borderColor: 'green',
            backgroundColor: ' rgba(0, 255, 0, 0.3)',

            fill: true,
          },
          {
            data: dailyDataUpdated.map(({ total_deaths }) => total_deaths),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: ' rgb(255, 0, 0)',
            fill: true,
          },
          {
            data: dailyDataUpdated.map(({ total_cases }) => total_cases),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>
      <div className={styles.chartWrapper}>
        <div className={styles.chartAreaWrapper}>{lineChart} </div>
        <i>
          <h6>
            <u> Data Collected From 22-Jan-2020</u>
          </h6>
        </i>
      </div>

      <div className={styles.card}>
        <h4>
          For every <span className={styles.blue}>100</span> people in the
          community who had gotten infected, approximately
          <span className={styles.red}> {deathPer} </span> ended up dying.
        </h4>
        <h3>
          Made With <span>❤</span> by
          <u>
            <i>
              {' '}
              <a href='https://github.com/01kingmaker01/Covid-Tracker'>
                {' '}
                Ketan Chavan
              </a>
            </i>
          </u>
        </h3>
      </div>
    </div>
  );
};

export default Chart;
