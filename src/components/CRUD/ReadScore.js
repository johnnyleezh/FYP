import React, { useState, useEffect } from "react";
import { readData } from "./CRUD";
import { parse, format } from "date-fns";

const LatestScore = (uniqueId) => {
    const [latestScore, setLatestScore] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Use the readData function to fetch the data from Firestore
                const data = await readData("Mental Health", "userId", uniqueId);

                if (data.length > 0) {
                    // Sort the data based on the date and time fields in descending order
                    data.sort((a, b) => {
                        const dateTimeA = parse(`${a.date} ${a.time}`, "dd/MM/yyyy hh:mm:ss a", new Date());
                        const dateTimeB = parse(`${b.date} ${b.time}`, "dd/MM/yyyy h:mm:ss a", new Date());
                        return dateTimeB - dateTimeA;
                    });

                    // Get the latest score (the first entry after sorting)
                    const latestScoreData = data[0];
                    // Convert the date and time strings to Date objects using date-fns parse function
                    const parsedDate = parse(latestScoreData.date, "dd/MM/yyyy", new Date());
                    const parsedTime = parse(latestScoreData.time, "hh:mm:ss a", new Date());
                    // Create a new object with the formatted date and time
                    const formattedDate = format(parsedDate, "dd/MM/yyyy");
                    const formattedTime = format(parsedTime, "hh:mm:ss a");
                    const latestScoreWithFormattedDateTime = {
                        ...latestScoreData,
                        date: formattedDate,
                        time: formattedTime
                    };
                    setLatestScore(latestScoreWithFormattedDateTime);
                } else {
                    setLatestScore(null);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setLatestScore(null);
            }
        };

        fetchData();
    }, [uniqueId]);

    return latestScore ? latestScore : false;
};

export { LatestScore };
