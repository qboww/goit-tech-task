import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectFavorites } from "../../redux/catalog/catalogSelectors";
import Catalog from "../../components/Catalog/Catalog";
import toast, { Toaster } from 'react-hot-toast';
import css from "./CartPage.module.css";

const CartPage = () => {
  const navigate = useNavigate();
  const favorites = useSelector(selectFavorites);

  const subtotal = favorites.reduce((sum, item) => sum + (item.price || 0), 0);
  const shipping = subtotal > 50 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleCheckout = () => {
    const purchasePromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (favorites.length > 0) {
          resolve();
        } else {
          reject(new Error('Cart is empty'));
        }
      }, 2000);
    });

    toast.promise(
      purchasePromise,
      {
        loading: 'PROCESSING YOUR ORDER...',
        success: () => {
          const orderNumber = `ORD-${Date.now()}`;
          return (
            <div>
              <div style={{ fontWeight: 'bold', marginBottom: '8px', textTransform: 'uppercase' }}>
                ORDER CONFIRMED
              </div>
              <div style={{ fontSize: '12px', letterSpacing: '0.5px' }}>
                ORDER #: {orderNumber}
                <br />
                TOTAL: ${total.toFixed(2)}
              </div>
            </div>
          );
        },
        error: (error) => `PURCHASE FAILED: ${error.message.toUpperCase()}`
      },
      {
        style: {
          minWidth: '300px',
          borderRadius: '0',
          background: '#000',
          color: '#fff',
          fontSize: '11px',
          letterSpacing: '1px',
        },
        success: {
          duration: 5000,
        },
        error: {
          duration: 4000,
        },
      }
    );
  };

  const handleAddPromoCode = () => {
    toast('PROMO CODE APPLIED', {
      duration: 3000,
      position: 'top-right',
      style: {
        background: '#000',
        color: '#fff',
        borderRadius: '0',
        fontSize: '11px',
        letterSpacing: '1px',
      },
    });
  };

  return (
    <div className="container"> {/* Add container wrapper here */}
      <div className={css.cartPage}>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            style: {
              background: '#000',
              color: '#fff',
              borderRadius: '0',
              fontSize: '11px',
              letterSpacing: '1px',
              textTransform: 'uppercase',
            },
          }}
        />

        {favorites.length === 0 ? (
          <div className={css.emptyCart}>
            <h2 className={css.emptyTitle}>SHOPPING BAG (0)</h2>
            <p className={css.emptyText}>YOUR SHOPPING BAG IS EMPTY</p>
            <button 
              className={css.shopButton}
              onClick={() => navigate('/catalog')}
            >
              CONTINUE SHOPPING
            </button>
          </div>
        ) : (
          <div className={css.cartContainer}>
            <div className={css.cartHeader}>
              <h1 className={css.title}>SHOPPING BAG ({favorites.length})</h1>
            </div>

            <div className={css.cartContent}>
              <div className={css.itemsSection}>
                <Catalog items={favorites} />
              </div>

              <div className={css.orderSummary}>
                <div className={css.summaryCard}>
                  <h3 className={css.summaryTitle}>ORDER SUMMARY</h3>
                  
                  <div className={css.summaryRow}>
                    <span>SUBTOTAL</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className={css.summaryRow}>
                    <span>SHIPPING</span>
                    <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  
                  <div className={css.summaryRow}>
                    <span>TAX</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  
                  
                  <div className={`${css.summaryRow} ${css.total}`}>
                    <span>TOTAL</span>
                    <span>${total.toFixed(2)}</span>
                  </div>

                  {subtotal < 50 && (
                    <div className={css.shippingNote}>
                      ADD ${(50 - subtotal).toFixed(2)} MORE FOR FREE SHIPPING
                    </div>
                  )}

                  <button 
                    className={css.checkoutButton}
                    onClick={handleCheckout}
                  >
                    PROCEED TO CHECKOUT
                  </button>

                  <div className={css.promoSection}>
                    <h4>PROMOTIONAL CODE</h4>
                    <div className={css.promoInput}>
                      <input 
                        type="text" 
                        placeholder="ENTER CODE" 
                        className={css.promoField}
                      />
                      <button 
                        className={css.promoButton}
                        onClick={handleAddPromoCode}
                      >
                        APPLY
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;