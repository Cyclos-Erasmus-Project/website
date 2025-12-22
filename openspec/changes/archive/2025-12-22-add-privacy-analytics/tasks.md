# Tasks: Add Privacy-Preserving Analytics

## 1. GoatCounter Setup
- [x] 1.1 Create GoatCounter account at goatcounter.com (free tier)
- [x] 1.2 Configure site code (cyclos-project)
- [x] 1.3 Note the tracking endpoint URL (https://cyclos-project.goatcounter.com/count)

## 2. Analytics Integration
- [x] 2.1 Add GoatCounter script tag to BaseLayout.astro
- [x] 2.2 Use data-goatcounter attribute for configuration
- [x] 2.3 Script loads async (non-blocking)

## 3. Verification
- [x] 3.1 Test script loads correctly in production build
- [x] 3.2 Verify no cookies are set (DevTools → Application → Cookies)
- [x] 3.3 Confirm pageviews appear in GoatCounter dashboard
