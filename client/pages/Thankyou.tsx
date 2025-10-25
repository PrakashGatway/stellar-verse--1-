import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import {
  CheckCircle,
  Phone,
  Mail,
  X
} from 'lucide-react';

const FullScreenThankYou = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const name = searchParams.get('name') || '';
  const email = searchParams.get('email') || '';

  const handleClose = () => {
    navigate('/');
  };

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div 
      className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm transition-all duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby="thank-you-title"
    >
      {/* Header */}
      <header className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              className="h-10 sm:h-12" 
              src="https://www.gatewayabroadeducations.com/images/logo.svg" 
              alt="Gateway Abroad Logo" 
            />
          </div>
          <button
            onClick={handleClose}
            className="p-2 sm:p-3 hover:bg-secondary rounded-lg sm:rounded-xl transition-all duration-200 hover:scale-105 text-foreground"
            aria-label="Close thank you screen"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 flex items-center min-h-[calc(100vh-80px)]">
        <div className="max-w-4xl mx-auto w-full">
          {/* Success Section */}
          <section className="text-center mb-4 sm:mb-8">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="rounded-full bg-green-100 p-4 sm:p-6">
                  <CheckCircle className="w-16 h-16 sm:w-20 sm:h-20 text-green-600" />
                </div>
                <div className="absolute inset-0 rounded-full bg-green-200 animate-ping opacity-20"></div>
              </div>
            </div>

            <h1 
              id="thank-you-title"
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4"
            >
              Thank You{name ? `, ${name}` : ''}!
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Your consultation request has been received successfully
            </p>
          </section>

          <section className="max-w-3xl mx-auto">
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
              {/* Contact Info */}
              <div className="bg-primary/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
                <h3 className="text-base sm:text-xl font-bold text-foreground mb-2 sm:mb-6">
                  Need Immediate Help?
                </h3>
                <div className="space-y-2">
                  <a
                    href="tel:+919001571113"
                    className="flex items-center gap-4 group"
                  >
                    <div className="rounded-xl bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-muted-foreground">Call us at</p>
                      <p className="text-sm sm:text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                        +91 90015 71113
                      </p>
                    </div>
                  </a>

                  <a
                    href={`mailto:jaipur@gatewayabroad.in`}
                    className="flex items-center gap-4 group"
                  >
                    <div className="rounded-xl bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-muted-foreground">Email us at</p>
                      <p className="text-sm sm:text-base font-semibold text-foreground group-hover:text-primary transition-colors break-words">
                        jaipur@gatewayabroad.in
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Actions */}
              <div className="bg-secondary/100 rounded-2xl sm:rounded-3xl p-3 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-6">
                  Next Steps
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={handleClose}
                    className="w-full py-2 sm:py-3 px-4 sm:px-6 rounded-xl font-semibold bg-background border border-primary text-primary hover:bg-primary/5 transition-all duration-200 hover:scale-[1.02] active:scale-100"
                  >
                    Return to Website
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Footer Note */}
          <footer className="text-center mt-6 sm:mt-12">
            <p className="text-xs sm:text-lg text-muted-foreground">
              We're excited to help you achieve your study abroad dreams! 🌟
            </p>
            {email && (
              <p className="text-sm text-muted-foreground mt-2 max-w-md mx-auto px-2">
                You'll receive a confirmation email shortly at{' '}
                <span className="font-medium text-foreground break-words">{email}</span>
              </p>
            )}
          </footer>
        </div>
      </main>
    </div>
  );
};

export default FullScreenThankYou;