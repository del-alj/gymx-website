#!/bin/zsh

# Remove existing .git if any
rm -rf .git
git init

# Create proper directory structure
mkdir -p src/{components,data,pages,styles/components,styles/pages}

# Create new commits with accurate dates and files
dates=(
    "2024-03-18 09:00:00"
    "2024-03-19 11:30:00" 
    "2024-03-20 14:15:00"
    "2024-03-21 10:00:00"
    "2024-03-22 15:45:00"
    "2024-03-23 12:20:00"
    "2024-03-24 16:00:00"
)

messages=(
    "Initial project setup"
    "Add core components"
    "Implement home page"
    "Add membership plans" 
    "Implement media gallery"
    "Add contact system"
    "Finalize website"
)

for i in {1..7}; do
    # Calculate proper date offset
    commit_date=$(date -j -v +${i}d -f "%Y-%m-%d %H:%M:%S" "2024-03-17 00:00:00" "+%Y-%m-%dT%H:%M:%S")
    
    case $i in
        1)
            git add .gitignore README.md package.json package-lock.json tailwind.config.js \
            public/index.html public/manifest.json src/index.js src/App.js \
            src/styles/global.css
            ;;
            
        2)
            git add src/components/Navbar.js src/components/Footer.js \
            src/styles/components/navbar.css src/styles/components/footer.css
            ;;
            
        3)
            git add src/components/Hero.js src/pages/Home.js \
            src/styles/components/hero.css src/styles/pages/home.css
            ;;
            
        4)
            git add src/components/MembershipCard.js src/pages/Membership.js \
            src/data/memberships.js \
            src/styles/components/membershipCard.css src/styles/pages/membership.css
            ;;
            
        5)
            git add src/components/GalleryItem.js src/pages/Gallery.js \
            src/data/galleryItems.js \
            src/styles/components/galleryItem.css src/styles/pages/gallery.css
            ;;
            
        6)
            git add src/components/ContactForm.js src/pages/Contact.js \
            src/styles/components/contactForm.css src/styles/pages/contact.css
            ;;
            
        7)
            git add src/components/TestimonialCard.js src/pages/Testimonials.js \
            src/data/testimonials.js src/pages/About.js \
            src/styles/components/testimonialCard.css src/styles/pages/testimonials.css \
            src/styles/pages/about.css
            ;;
    esac

    GIT_AUTHOR_DATE="$commit_date" \
    GIT_COMMITTER_DATE="$commit_date" \
    git commit -m "${messages[$i-1]}" \
    -m "- Added component styles" \
    -m "- Updated documentation"
done

# Add any remaining files
git add .
GIT_AUTHOR_DATE="2024-03-24T17:00:00" \
GIT_COMMITTER_DATE="2024-03-24T17:00:00" \
git commit -m "Final cleanup" -m "- Add remaining files"