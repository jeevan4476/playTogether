import { useEffect,useState } from "react";
import axios from "axios";
import {jwtDecode} from "jwt-decode";

const backendUrl = "http://localhost:3000";

export const useTurfs = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${backendUrl}/turfs/all`);
                setData(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return { data, loading };
};

export const useTurf = (id) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${backendUrl}/turfs/${id}`);
                setData(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [id]);

    return { data, loading };
}

export const useCategoryTurfs = (category) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${backendUrl}/turfs/category/${category}`);
                setData(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [category]);

    return { data, loading };
}

export const useUser = () => {
    const token = localStorage.getItem("token");
    const id = jwtDecode(token).id;
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    
    const fetchData = async () => {
        try {
            const response = await axios.get(`${backendUrl}/bookings/user/${id}`);
            setData(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    useEffect(() => {
        fetchData();
    }, [id]);

    return { data, loading , refetch: fetchData};
}

export const useBookings = () => {
    const token = localStorage.getItem("token");
    const id = jwtDecode(token);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${backendUrl}/bookings/user/${id}`);
                setData(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [id]);

    return { data, loading };
}

