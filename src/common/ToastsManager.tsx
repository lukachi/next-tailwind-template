'use client'

import {useEffect} from "react";
import {bus, BusEvents} from "@/helpers";
import {useNotification} from "@/hooks";
import {ToastContainer} from "react-toastify";

export default function ToastsManager() {
    const { showToast } = useNotification()

    useEffect(() => {
        const showSuccessToast = (payload: unknown) => showToast('success', payload)
        const showWarningToast = (payload: unknown) => showToast('warning', payload)
        const showErrorToast = (payload: unknown) => showToast('error', payload)
        const showInfoToast = (payload: unknown) => showToast('info', payload)

        let mountingInit = async () => {
            bus.on(BusEvents.Success, showSuccessToast)
            bus.on(BusEvents.Warning, showWarningToast)
            bus.on(BusEvents.Error, showErrorToast)
            bus.on(BusEvents.Info, showInfoToast)
        }

        mountingInit()

        return () => {
            bus.off(BusEvents.Success, showSuccessToast)
            bus.off(BusEvents.Warning, showWarningToast)
            bus.off(BusEvents.Error, showErrorToast)
            bus.off(BusEvents.Info, showInfoToast)

            mountingInit = async () => {
                /* empty */
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <ToastContainer />
}
