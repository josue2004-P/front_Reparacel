import { useDispatch, useSelector } from "react-redux";
import {
  onToogleSidebar,
  onOpenProductoUpdateModal,
  onCloseProductoUpdateModal,
  onOpenProductosPedidoModal,
  onCloseProductosPedidoModal
} from "../store";

export const useUiStore = () => {
  const dispatch = useDispatch();

  const {
    isSidebarOpen,
    isProductoUpdateModalOpen,
    isProductoPedidosModalOpen,

  } = useSelector((state) => state.ui);

  // SIDEBAR
  const toogleSidebar = () => {
    dispatch(onToogleSidebar());
  };

  // MODAL UPDATE EQUIPO
  const openProductoUpdateModal = () => {
    dispatch( onOpenProductoUpdateModal());
  };
  const closeProductoUpdateModal = () => {
    dispatch( onCloseProductoUpdateModal());
  };

    // MODAL PEDIDOS PRODUCTOS
    const openProductosPedidosModal = () => {
      dispatch( onOpenProductosPedidoModal());
    };
    const closeProductosPedidosModal = () => {
      dispatch( onCloseProductosPedidoModal());
    };

  return {
    isSidebarOpen,
    isProductoUpdateModalOpen,
    isProductoPedidosModalOpen,

    openProductoUpdateModal,
    closeProductoUpdateModal,
    
    // MODAL PRODUCTO PEDIDOS
    openProductosPedidosModal,
    closeProductosPedidosModal,

    toogleSidebar,
  };
};
